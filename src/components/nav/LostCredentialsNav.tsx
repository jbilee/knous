import Link from "next/link";

type LostCredentialsNavProps = {
  currentPath: string;
};

const commonClasses = "p-4 border-neutral-950";
const activeClasses = "border-b-2 sm:border-b-4 border-[#1d2945] dark:border-[#20c1f5]";
const inactiveClasses = "hover:text-neutral-400";

export default function LostCredentialsNav({ currentPath }: LostCredentialsNavProps) {
  return (
    <div className="flex font-bold text-lg sm:text-2xl">
      <Link
        href="/find-username"
        className={`${commonClasses} ${currentPath === "/find-username" ? activeClasses : inactiveClasses}`}
      >
        아이디 찾기
      </Link>
      <Link
        href="/find-password"
        className={`${commonClasses} ${currentPath === "/find-password" ? activeClasses : inactiveClasses}`}
      >
        비밀번호 찾기
      </Link>
    </div>
  );
}
