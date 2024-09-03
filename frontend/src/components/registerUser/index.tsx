import React from "react";
import axios from "axios";
import FormInput from "./formInput";
import useForm from "./useForm";
import { useAuth } from "../context";

export const RegisterUser = () => {
  const { form, errors, handleChange } = useForm();
  const { setToken, setRole } = useAuth();

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      username: form.email,
      password: form.password,
      rolesId: [1],
    };

    try {
      const response = await axios.post("/api/auth/register", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { token, role } = response.data;

      setToken(token);
      setRole(role);

      console.log("User registered and logged in successfully:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error registering user:",
          error.response?.data || error.message
        );
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };
console.log(errors)
  return (
    <div className="register-user ">
      <h2>Registro de Usuarios</h2>
      {Object.keys(errors).length > 0 && (
        <ul>
          {Object.entries(errors).map(([key, error]) => (
            <li key={key}>{error}</li>
          ))}
        </ul>
      )}
      <form onSubmit={submitForm}>
        <FormInput
          id="email"
          name="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          id="password"
          name="Contraseña"
          type="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        <button className="btn btn-secondary" type="submit">Regístrate</button>
      </form>
    </div>
  );
};
