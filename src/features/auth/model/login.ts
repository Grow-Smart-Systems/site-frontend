import { message } from "antd";
import { LoginParams } from "@src/shared/api/types";
import { login } from "@src/shared/api/auth/login";

export const handleLogin = async (
    params: LoginParams,
    onSuccess: () => void
) => {
    try {
        await login(params);
        onSuccess();
    } catch (e: any) {
        message.error(e.message);
    }
};
