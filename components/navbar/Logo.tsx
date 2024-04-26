import Image from "next/image";
import logo from "@/public/assets/images/koinx-logo.png"

export default function Logo() {
  return (
    <Image src={logo} alt="koinX"
    width={100} height={100}  className="" />
  )
}
