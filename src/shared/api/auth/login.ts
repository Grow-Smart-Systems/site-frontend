import { LoginParams } from "@src/shared/api/types";

export const login = async (params: LoginParams) => {
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });

    if (!response.ok) {
        throw new Error("Неверный логин или пароль");
    }

    return await response.json();
};
