import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
} from "react";
import styles from "../../../styles/components/quests/quizzes.module.css";

type ImageChoiceProps = {
  setSelected: Dispatch<SetStateAction<boolean>>;
  setSelectedOptions: Dispatch<SetStateAction<string[]>>;
  selectedOptions: string[];
  question: QuizQuestion;
};

const ImageChoice: FunctionComponent<ImageChoiceProps> = ({
  setSelected,
  setSelectedOptions,
  selectedOptions,
  question,
}) => {
  useEffect(() => {
    if (selectedOptions.length > 0) setSelected(true);
    else setSelected(false);
  }, [selectedOptions]);

  return (
    <div className={`${styles.questionContainer} ${styles.full}`}>
      <div className={styles.tableLayout}>
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`${styles.checkBoxContainer} ${styles.checkboxImageContainer}`}
          >
            <input
              type="checkbox"
              name="option"
              id={option}
              onChange={() => {
                if (selectedOptions.includes(index.toString()))
                  setSelectedOptions(
                    selectedOptions.filter((item) => item !== index.toString())
                  );
                else setSelectedOptions([...selectedOptions, index.toString()]);
              }}
              className={styles.checkbox}
              checked={selectedOptions.includes(index.toString())}
            />
            <label className={styles.checkboxLabel} htmlFor={option}>
              <img src={option} className={styles.checkboxImage} />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageChoice;
