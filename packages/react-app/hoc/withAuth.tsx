import app from "@/firebase";
import { getAuth } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface WithAuthProps {
  isAuthenticated?: boolean;
}

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P & WithAuthProps> => {
  const Wrapper: React.FC<P & WithAuthProps> = (props) => {
    const { push } = useRouter();
    const auth = getAuth(app);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
      if (!loading && !!!user) {
        push("/login");
      }
    }, [user, loading]);

    if (loading || !user) {
      return (
        <div className="flex justify-center items-center h-screen">
          <Image
            className="block h-45 w-h-45 sm:block lg:block animate-spin"
            src="/logo.svg"
            width="150"
            height="150"
            alt="Logo"
          />
        </div>
      );
    }

    return <WrappedComponent {...props} isAuthenticated={true} />;
  };

  return Wrapper;
};

export default withAuth;
