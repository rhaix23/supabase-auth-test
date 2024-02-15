import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";

const Page = () => {
    const onSubmit = async (formData: FormData) => {
        "use server";

        const supabase = createClient();
        const password = formData.get("password") as string;

        const { data, error } = await supabase.auth.updateUser({
            password,
        })

        if (error) {
            console.error(error);
            return;
        }

        redirect("/");
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <form action={onSubmit} className="flex flex-col">
                <input
                    className="rounded-md px-4 py-2 bg-inherit border mb-6"
                    name="password"
                    type="password"
                    placeholder="Enter your new password"
                    required
                />

                <button type="submit" className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default Page;