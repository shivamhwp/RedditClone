import { supabase } from "../services/supabaseClient";
import Loading from "./Loading";
import { useEffect, useState } from "react";

const style = {
  wrapper: "flex min-h-screen flex-col items-center justify-center space-y-2 ",
  loginBtn:
    "group flex items-center space-x-4 rounded border-gray-300 border p-4 hover:bg-white",
  loginBtnText: "font-bold group-hover:text-black",
};

const Login = () => {
  const signInWithGoogle = async () => {
    try {
      await supabase.auth.signIn({
        provider: "google",
      });
    } catch (error) {}
  };

  return (
    <div className={style.wrapper}>
      <img
        className="h-52 "
        src="https://variety.com/wp-content/uploads/2020/06/reddit-logo-1.png?w=640&h=360&crop=1f"
      />
      <button className={style.loginBtn} onClick={signInWithGoogle}>
        <img
          className="h-6 w-6"
          src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
        />
        <span className={style.loginBtnText}>Sign In with Google</span>
      </button>
    </div>
  );
};

export default Login;
