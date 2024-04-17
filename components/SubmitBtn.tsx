import { FaPaperPlane } from "react-icons/fa";

import { Button } from "./ui/button";

type SubmitBtnProps = {
  actionName: string;
};

export default function SubmitBtn({ actionName }: SubmitBtnProps) {
  return (
    <Button type="submit" size={"lg"}>
      {actionName}
      <FaPaperPlane />
    </Button>
  );
}
