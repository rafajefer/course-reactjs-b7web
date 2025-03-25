import { Quiz } from "@/components/Quiz";
import { questions } from "@/data/questions";

export default () => {
  return (
    <Quiz questions={questions} />
  );
}