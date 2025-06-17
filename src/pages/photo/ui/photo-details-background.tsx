import clsx from "clsx"
import background from "../assets/background.png"

type Props = {
  className?: string
}

export const PhotoDetailsBackground = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        "absolute min-w-[1920px] w-full -top-[81px] left-0 h-full z-0 bg-no-repeat bg-contain",
        className,
      )}
      style={{ backgroundImage: `url(${background.src})` }}
    />
  )
}
