import { FaPaperPlane } from "react-icons/fa";

type SubmitBtnProps = {
  actionName: string
}

export default function SubmitBtn({ actionName }: SubmitBtnProps) {
  return (
    <button type="submit" className="btn btn-submit">
      {actionName}
      <FaPaperPlane />
    </button>
  )
}
