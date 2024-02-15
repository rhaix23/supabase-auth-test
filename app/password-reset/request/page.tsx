import {createClient} from "@/utils/supabase/server";
import {headers} from "next/headers";

/* Password Reset Flow:
* 1. User requests a password reset
* 2. A password reset link is sent to the email
* 3. The user clicks the link, app authenticates the user, and redirects to the password update form
* 4. User updates his password
*/

const Page = () => {
    const onSubmit = async (formData: FormData) => {
        "use server";

        const supabase = createClient();
        const origin = headers().get("origin");
        const email = formData.get("email") as string;

        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${origin}/auth/password-reset`,
        })

        if (error) {
            console.error(error);
            return;
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <form action={onSubmit} className="flex flex-col">
                <input
                    className="rounded-md px-4 py-2 bg-inherit border mb-6"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                />

                <button type="submit" className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
                    Request Password Reset
                </button>
            </form>
        </div>
    );
};

export default Page;