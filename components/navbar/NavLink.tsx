import Link from "next/link"

interface myProps{
    label: string
}

export default function NavLink({label} : myProps ) {
  return (
    <>
    <Link href={"/"} className="font-medium px-4  text-sm">{label}</Link>
    </>
  )
}
