import { FaUpload } from "react-icons/fa";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import ModalWrapper from "../../../../partials/modals/ModalWrapper";
import SpinnerButton from "../../../../partials/spinners/SpinnerButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../helpers/queryData";
import {
  InputText,
  InputTextArea,
  InputFileUpload,
} from "../../../../helpers/FormInputs";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import useUploadPhoto from "../../../../custom-hook/useUploadPhoto";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

const ModalAddPost = ({ itemEdit, position }) => {
  const { dispatch, store } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));
  const queryClient = useQueryClient();

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    `/v1/upload/photo`,
    dispatch
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/posts/${itemEdit.posts_aid}` : `/v1/posts`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage("Successfully " + [store.isEdit ? "updated." : "added."])
        );
      } else {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    posts_title: itemEdit ? itemEdit.posts_title : "",
    posts_category: itemEdit ? itemEdit.posts_category : "",
    posts_author: itemEdit ? itemEdit.posts_author : "",
    posts_photo: itemEdit ? itemEdit.posts_photo : "",
    posts_article: itemEdit ? itemEdit.posts_article : "",
    posts_publish_date: itemEdit ? itemEdit.posts_publish_date : "",
  };
  const yupSchema = object({
    posts_title: string().required("Title Required*"),
    posts_category: string().required("Category Required*"),
    posts_author: string().required("Author Required*"),
    // posts_photo: string().required("Image Required*"),
    posts_article: string().required("Article Required*"),
    posts_publish_date: string().required("Publishing Date Required*"),
  });

  return (
    <ModalWrapper position={position}>
      <div className="main-modal w-[1300px] bg-secondary text-content rounded-2xl">
        <div className="modal-header p-4 relative">
          <h2>{store.isEdit ? "Edit" : "New"} posts</h2>
          <button className="absolute top-[25px] right-4" onClick={handleClose}>
            <LiaTimesSolid />
          </button>
        </div>
        <div className="modal-body p-4">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              uploadPhoto();
              mutation.mutate({
                ...values,
                posts_photo:
                  (itemEdit && itemEdit.posts_photo === "") || photo
                    ? photo === null
                      ? itemEdit.posts_photo
                      : photo.name
                    : values.posts_photo,
              });
            }}
          >
            <Form action="">
              <div className="input-wrap">
                <InputText label="Title" type="text" name="posts_title" />
              </div>
              <div className="grid grid-cols-[1fr_2fr] gap-6">
                <div className="flex flex-col">
                  <div className="input-wrap input-photo grow">
                    {photo || (itemEdit && itemEdit.posts_photo !== "") ? (
                      <img
                        src={
                          photo
                            ? URL.createObjectURL(photo) // preview
                            : itemEdit.posts_photo // check db
                            ? devBaseImgUrl + "/" + itemEdit.posts_photo
                            : null
                        }
                        alt="Photo"
                        className="rounded-tr-md rounded-tl-md h-[200px] max-h-[200px] w-full object-cover object-center m-auto"
                      />
                    ) : (
                      <span className="min-h-20 flex items-center justify-center h-[250px]">
                        <span className="text-accent mr-1">Drag & Drop</span>{" "}
                        photo here or{" "}
                        <span className="text-accent ml-1">Browse</span>
                      </span>
                    )}

                    {(photo !== null ||
                      (itemEdit && itemEdit.posts_photo !== "")) && (
                      <span className="min-h-10 flex items-center justify-center">
                        <span className="text-accent mr-1">Drag & Drop</span>{" "}
                        photo here or{" "}
                        <span className="text-accent ml-1">Browse</span>
                      </span>
                    )}

                    {/* <FaUpload className="opacity-100 duration-200 group-hover:opacity-100 fill-dark/70 absolute top-0 right-0 bottom-0 left-0 min-w-[1.2rem] min-h-[1.2rem] max-w-[1.2rem] max-h-[1.2rem] m-auto cursor-pointer" /> */}
                    <InputFileUpload
                      label="Photo"
                      name="photo"
                      type="file"
                      id="myFile"
                      accept="image/*"
                      title="Upload photo"
                      onChange={(e) => handleChangePhoto(e)}
                      onDrop={(e) => handleChangePhoto(e)}
                      className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full"
                    />
                  </div>
                  <div className="input-wrap">
                    <InputText label="Author" type="text" name="posts_author" />
                  </div>
                  <div className="input-wrap">
                    <InputText
                      label="Category"
                      type="text"
                      name="posts_category"
                    />
                  </div>

                  <div className="input-wrap">
                    <InputText
                      label="Publishing Date"
                      type="text"
                      name="posts_publish_date"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="input-wrap">
                    <InputTextArea
                      label="Article"
                      name="posts_article"
                      cls="h-[42rem] resize-none"
                    />
                  </div>
                </div>
              </div>
              <div className="form-action">
                <button className="btn btn-form btn--accent" type="submit">
                  {`${
                    mutation.isPending ? (
                      <SpinnerButton />
                    ) : store.isEdit ? (
                      "Update"
                    ) : (
                      "Add"
                    )
                  }`}
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
          </Formik>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddPost;
