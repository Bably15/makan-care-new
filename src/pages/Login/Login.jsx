import { useDispatch, useSelector } from "react-redux";
import {
    loginRequest,
    loginSuccess,
    loginFailure,
} from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { login } from "../../services/authService";

const Login = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const initialValues = { email: "", password: "" };

    const validate = (values) => {
        let errors = {};
        if (!values.email) errors.email = "Email is required!";
        if (!values.password) errors.password = "Password is required!";
        return errors;
    };

    const submitHandler = async (formData) => {
        dispatch(loginRequest());
        try {
            const user = await login(formData);

            dispatch(loginSuccess(user));
            toast.success("Login successful!");
        } catch (err) {
            dispatch(loginFailure("Login failed!"));
            toast.error("Login failed!");
        }
    };

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
        useForm(initialValues, validate, submitHandler);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-teal-500">
                    Login
                </h2>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
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
                        className="w-full bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600"
                    >
                        {loading ? "Logging In..." : "Login"}
                    </button>

                    <p className="text-center text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-teal-500 hover:underline"
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
