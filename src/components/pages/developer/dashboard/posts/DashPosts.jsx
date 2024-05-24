import React from "react";
import { FiPlus } from "react-icons/fi";
import { StoreContext } from "../../../../../store/StoreContext";
import useQueryData from "../../../../custom-hook/useQueryData";
import Navigation from "../../../../partials/Navigation";
import Header from "../../../../partials/Header";
import Toast from "../../../../partials/Toast";
import ModalAddPost from "./ModalAddPost";
import { setIsAdd, setIsEdit } from "../../../../../store/StoreAction";
import ModalError from "../../../../partials/modals/ModalError";
import PostsTable from "./PostsTable";

const DashPosts = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true)), dispatch(setIsEdit(false)), setItemEdit(null);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: posts,
  } = useQueryData(
    "/v1/posts", // endpoint
    "get", // method
    "posts",
  );

  return (
    <section className="flex relative left-[250px] dash-page">
      <Navigation menu={"posts"} />
      <main className="w-[calc(100%-250px)]">
        <Header />
        <div className="flex relative">
          <div
            className={`main-wrapper transition-all px-4 py-3 ${
              store.isShow ? "w-3/4" : "w-full"
            }`}
          >
            <div
              className={`fixed bg-primary ${
                store.isShow ? "w-[calc(100%-700px)]" : "w-[calc(100%-300px)]"
              }`}
            >
              <div className="flex justify-between items-center">
                <h1 className="leading-none mb-0">Portfolio Database</h1>
                {/* <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword} /> */}
              </div>

              <div className="tab flex between-center mt-8 border-b border-line mb-8">
                {/* <ul className="flex items-center gap-10">
                  <li className="tab-link active">
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="tab-link">
                      <Link to="/database/teacher">Teacher</Link>
                    </li>
                    <li className="tab-link">
                      <Link to="/database/staff">Staff</Link>
                    </li>
                </ul> */}
                <ul>
                  <li className="tab-link active">
                    <h2 className="mb-0">Search</h2>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn--accent"
                  onClick={handleAdd}
                >
                  <FiPlus /> New
                </button>
              </div>
            </div>
            <PostsTable
              isLoading={isLoading}
              posts={posts}
              isFetching={isFetching}
              setItemEdit={setItemEdit}
            />
          </div>

          {/* <DatabaseInformation /> */}
        </div>
      </main>
      {store.isAdd && <ModalAddPost itemEdit={itemEdit} position="center" />}
      {/* <ModalAddPortfolio itemEdit={itemEdit}/> */}
      {store.success && <Toast />}
      {store.error && <ModalError position={"center"} />}
    </section>
  );
};

export default DashPosts;
