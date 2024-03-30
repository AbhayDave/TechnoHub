import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import appwriteService from "../appwrite/config";
import authService from "../appwrite/auth";

function SearchBox() {
  const [userId, setUserId] = useState("");

  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        keyword: "",
        status: "active",
      },
    });

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      setUserId(userData.$id);
    });
  }, []);

  const navigate = useNavigate();
  //   const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    // const file = await appwriteService.uploadFile(data.featuredImage[0]);

    appwriteService.searchBlog(data.keyword, userId);

    // if (file) {
    //   // console.log(userData);
    //   const fileId = file.$id;
    //   data.featuredImage = fileId;
    //   const dbPost = await appwriteService.createPost({
    //     ...data,
    //     userId: userData.$id,
    //   });

    //   if (dbPost) {
    //     navigate(`/post/${dbPost.$id}`);
    //   }
    // }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label=""
          placeholder="Search Keyword..."
          className="mb-4"
          {...register("keyword", { required: true })}
        />
      </div>
      <div className="w-1/3 px-2">
        <Button type="submit" bgColor="bg-green-500" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default SearchBox;



//   const slugTransform = useCallback((value) => {
//     if (value && typeof value === "string")
//       return value
//         .trim()
//         .toLowerCase()
//         .replace(/[^a-zA-Z\d\s]+/g, "-")
//         .replace(/\s/g, "-");

//     return "";
//   }, []);

//   React.useEffect(() => {
//     const subscription = watch((value, { name }) => {
//       if (name === "title") {
//         setValue("slug", slugTransform(value.title), { shouldValidate: true });
//       }
//     });

//     return () => subscription.unsubscribe();
//   }, [watch, slugTransform, setValue]);
