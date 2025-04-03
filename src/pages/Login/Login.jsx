import { useDispatch, useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import {
    loginRequest,
    loginSuccess,
    loginFailure,
} from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { login } from "../../services/authService";
import GOOGLE_LOGO from "../../assets/google.jpeg";
import { APPROUTES } from "../../constants/routes/appRoutes";

const Login = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const initialValues = { username: "", password: "" };

    const validate = (values) => {
        let errors = {};
        if (!values.username) errors.username = "Username is required!";
        if (!values.password) errors.password = "Password is required!";
        return errors;
    };
    const loginWithGoogle = useGoogleLogin({
        onSuccess: async (response) => {
            const user = response;
            dispatch(loginSuccess(user));
            toast.success("Google Login Successful!", { autoClose: 5000 });
            navigate(APPROUTES.HOME);
        },
        onError: () => {
            dispatch(loginFailure("Google sign-in failed!"));
            toast.error("Google sign-in failed!", { autoClose: 5000 });
        },
    });
    const submitHandler = async (formData) => {
        dispatch(loginRequest());
        try {
            const user = await login(formData);

            dispatch(loginSuccess(user));
            toast.success("Login successful!", { autoClose: 5000 });
            navigate(APPROUTES.HOME);
        } catch (err) {
            dispatch(loginFailure("Login failed!"));
            toast.error("Login failed!", { autoClose: 5000 });
        }
    };

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
        useForm(initialValues, validate, submitHandler);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-[#6b4f36]">
                    Login
                </h2>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="p-2 w-full border border-gray-200 rounded-md"
                    />
                    {errors.email && touched.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="p-2 w-full border border-gray-200 rounded-md"
                    />
                    {errors.password && touched.password && (
                        <p className="text-red-500 text-sm">
                            {errors.password}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#6b4f36] text-white p-2 rounded-md hover:bg-stone-900 cursor-pointer"
                    >
                        {loading ? "Logging In..." : "Login"}
                    </button>
                    <button
                        onClick={() => loginWithGoogle()}
                        className="w-full flex items-center justify-center bg-[#5184ec] text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        <img
                            src={GOOGLE_LOGO}
                            alt="Google Logo"
                            className="w-5 h-5 mr-2 rounded-full"
                        />
                        Sign in with Google
                    </button>
                    <p className="text-center text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-[#6b4f36] hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
