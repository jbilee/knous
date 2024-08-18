import MyAccountMenu from "@/components/account/MyAccountMenu";

export default function MyAccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex py-10 xl:py-24 gap-4">
      <MyAccountMenu />
      {children}
    </div>
  );
}