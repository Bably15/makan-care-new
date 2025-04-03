import { useDispatch, useSelector } from "react-redux";
import {
    signUpRequest,
    signUpSuccess,
    signUpFailure,
} from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signup } from "../../services/authService";
import { APPROUTES } from "../../constants/routes/appRoutes";

const Signup = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
    };

    const validate = (values) => {
        let errors = {};
        if (!values.username) errors.username = "Username is required!";
        if (!values.email) errors.email = "Email is required!";
        if (!values.password) errors.password = "Password is required!";
        if (values.password !== values.confirmPassword)
            errors.confirmPassword = "Passwords must match!";
        if (!values.isAccepted)
            errors.isAccepted = "You must accept the terms!";
        return errors;
    };

    const submitHandler = async (formData) => {
        dispatch(signUpRequest());
        try {
            const user = await signup(formData);
            dispatch(signUpSuccess(user));
            toast.success("Signup successful!");
            navigate(APPROUTES.HOME);
        } catch (err) {
            dispatch(signUpFailure("Signup failed!"));
            toast.error("Signup failed!");
        }
    };

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
        useForm(initialValues, validate, submitHandler);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-[#6b4f36]">
                    Sign Up
                </h2>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className="mt-4 space-y-4"
                >
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="p-2 w-full border border-gray-200 rounded-md"
                    />
                    {errors.name && touched.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                    )}

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

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="p-2 w-full border border-gray-200 rounded-md"
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                        <p className="text-red-500 text-sm">
                            {errors.confirmPassword}
                        </p>
                    )}

                    <div className="flex justify-center items-center space-x-2">
                        <input
                            id="isAccepted"
                            type="checkbox"
                            name="isAccepted"
                            checked={values.isAccepted}
                            onChange={handleChange}
                        />
                        <label className="text-gray-600" htmlFor="isAccepted">
                            I accept terms of privacy policy
                        </label>
                    </div>
                    {errors.isAccepted && touched.isAccepted && (
                        <p className="text-red-500 text-sm">
                            {errors.isAccepted}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#6b4f36] text-white p-2 rounded-md hover:bg-stone-900 cursor-pointer"
                    >
                        {loading ? "Signing Up..." : "Create Account"}
                    </button>

                    <p className="text-center text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-[#6b4f36] hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
