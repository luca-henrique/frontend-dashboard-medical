import { useFormContext } from "react-hook-form";
import { mock } from "../../../i18n/mock";
import { FormSectionLayout } from "../../layout/form-layout/form-layout";
import { Input } from "../../atoms/input/input";
import { useRedeem } from "~/app/hook/use-redeem";
import { Select } from "~/components/atoms/select/select";

import { FormControl, Grid } from "@mui/material";

export const ExtraQuestionForm = () => {
  const {
    extraQuestions: { title },
  } = mock.form;

  const { redeem } = useRedeem();

  const {
    control,
    formState: { errors }, watch, register
  } = useFormContext();

  const { extra_question } = watch()


  return (
    <FormSectionLayout title={title}>
      <Grid container spacing={3} width="100%">
        {redeem?.extra_questions.map((q, index) => {
          return (
            <Grid size={[12, null, 6]} key={q.id}>
              <FormControl
                fullWidth
                sx={{ textAlign: "left", mt: [1, null, 2] }}
              >
                <input
                  type="hidden"
                  {...register(
                    `extra_question.${index}.--extra_question_id--`
                  )}
                  value={q.id}
                />

                <>
                  {q.answer_type === "text" && (
                    <Input
                      name={`extra_question.${index}.answer`}
                      control={control}
                      label={q.question}
                    />
                  )}

                  {q.answer_type === "text_area" && (
                    <Input
                      type="textarea"
                      name={`extra_question.${index}.answer`}
                      multiline
                      label={q.question}
                      control={control}
                    />
                  )}

                  {q.answer_type === "select_one" && (
                    <Select
                      name={`extra_question.${index}.answer`}
                      error={!!errors?.fullName?.message}
                      helperText={
                        typeof errors?.fullName?.message === "string"
                          ? errors?.fullName?.message
                          : ""
                      }
                      label={q.question}
                      control={control}
                      options={q.options.map((option) => ({
                        value: option.toLowerCase(),
                        label: option,
                      }))}
                    />
                  )}

                  {q.answer_type === "date" && (
                    <Input
                      name={`extra_question.${index}.answer`}
                      control={control}
                      label={q.question}
                      type="date"
                    />
                  )}
                </>


              </FormControl>
            </Grid>
          );
        })}
      </Grid>
    </FormSectionLayout>
  );
};

