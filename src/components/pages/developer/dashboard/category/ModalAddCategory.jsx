import React from "react";

import { LiaTimesSolid } from "react-icons/lia";
import { Formik, Form } from "formik";

import * as Yup from "yup";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import useUploadPhoto from "../../../../custom-hook/useUploadPhoto";
import useQueryData from "../../../../custom-hook/useQueryData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../helpers/queryData";
import ModalWrapper from "../../../../partials/modals/ModalWrapper";
import {
  InputFileUpload,
  InputText,
  InputTextArea,
} from "../../../../helpers/FormInputs";
import SpinnerButton from "../../../../partials/spinners/SpinnerButton";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

const ModalAddCategory = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/category/${itemEdit.category_aid}` : `/v1/category`,
        itemEdit ? "put" : "post",
        values
      ),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["category"] });

      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfuly updated.`));
      } else {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    category_title: itemEdit ? itemEdit.category_title : "",
  };

  const yupSchema = Yup.object({
    category_title: Yup.string().required("Required"),
  });
  return (
    <ModalWrapper>
      <div className="main-modal w-[400px] bg-secondary text-content h-screen">
        <div className="modal-header p-4 relative">
          <h2>New category</h2>
          <button className="absolute top-[25px] right-4" onClick={handleClose}>
            <LiaTimesSolid />
          </button>
        </div>
        <div className="modal-body p-4">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              mutation.mutate(values);
            }}
          >
            {(props) => {
              return (
                <Form className="flex flex-col">
                  <div className="grow overflow-y-auto mb-5 h-[82vh]">
                    <div className="input-wrap">
                      <InputText
                        label="Title"
                        type="text"
                        name="category_title"
                      />
                    </div>
                  </div>

                  <div className="form-action max-w-[400px] ml-auto w-full">
                    <button className="btn btn-form btn--accent" type="submit">
                      {" "}
                      {mutation.isPending ? <SpinnerButton /> : "Add"}
                    </button>
                    <button
                      className="btn btn-form btn--cancel"
                      type="button"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddCategory;
