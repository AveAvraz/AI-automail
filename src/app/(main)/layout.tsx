import Navigationbar from "./navigationbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigationbar />
      {children}
    </div>
  );
}
