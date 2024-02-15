import {createClient} from "@/utils/supabase/server";

const API_BASE_URL = 'http://localhost:5001/api';
const Page = async () => {
    // Communicate with an asp.net web api public endpoint
    const onSubmit = async () => {
        "use server";

        const supabase = createClient();
        const { data } = await supabase.auth.getSession();

        try {
            const response = await fetch(`${API_BASE_URL}/tests/public`);

            if (response.ok) {
                const data = await response.json(); // Assuming the response is JSON
                console.log(data)
                return data;
            } else {
                throw new Error('Failed to fetch');
            }
        } catch (error: any) {
            console.log(error);
        }
    }

    // Communicate with an asp.net web api protected endpoint
    const onSubmitAuth = async () => {
        "use server";

        const supabase = createClient();
        const { data } = await supabase.auth.getSession();

        try {
            const access_token = data.session?.access_token;

            if (access_token) {
                const response = await fetch(`${API_BASE_URL}/tests/protected`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                    },
                });

                if (response.ok) {
                    const data = await response.json(); // Assuming the response is JSON
                    console.log(data)
                    return data;
                } else {
                    throw new Error(`Failed to fetch: ${response.statusText}`);
                }
            } else {
                throw new Error('Token is undefined');
            }
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <form action={onSubmit} className="flex flex-col gap-4">
                <button
                    type="submit"
                    className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                >
                    Access Public Endpoint
                </button>

                <button
                    formAction={onSubmitAuth}
                    type="submit"
                    className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                >
                    Access Protected Endpoint
                </button>
            </form>
        </div>
    );
};

export default Page;