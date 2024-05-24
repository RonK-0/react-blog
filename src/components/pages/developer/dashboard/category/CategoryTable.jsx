import React from "react";
import TableLoader from "../../../../partials/TableLoader";
import NoData from "../../../../partials/NoData";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import SpinnerFetching from "../../../../partials/spinners/SpinnerFetching";
import ModalConfirm from "../../../../partials/modals/ModalConfirm";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  setIsActive,
  setIsAdd,
  setIsArchive,
  setIsDelete,
} from "../../../../../store/StoreAction";

const CategoryTable = ({ isLoading, isFetching, category, setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState("");

  let counter = 1;

  const handleArchive = (item) => {
    dispatch(setIsActive(true));
    setId(item.category_aid);
    dispatch(setIsArchive(0));
  };
  const handleRestore = (item) => {
    dispatch(setIsActive(true));
    setId(item.category_aid);
    dispatch(setIsArchive(1));
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.category_aid);
  };

  const handleHandle = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  return (
    <>
      <div className="table-wrapper relative">
        {isFetching && <SpinnerFetching />}
        <table>
          <thead>
            <tr>
              <th className="w-[10px]">#</th>
              <th className="w-[90%]">Category</th>
              <th className="w-[100px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={9}>
                  <TableLoader count="20" cols="4" />
                </td>
              </tr>
            )}

            {category?.data.length === 0 && (
              <tr>
                <td colSpan={9}>
                  <NoData />
                </td>
              </tr>
            )}

            {category?.data.map((item, key) => (
              <tr key={key}>
                <td>{counter++}</td>
                <td>{item.category_title}</td>
                <td className="table-action">
                  <ul>
                    {item.category_is_active ? (
                      <>
                        <li>
                          <button
                            onClick={() => handleHandle(item)}
                            className="tooltip"
                            data-tooltip="Edit"
                          >
                            <LiaEdit />
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleArchive(item)}
                            className="tooltip"
                            data-tooltip="Archive"
                          >
                            <PiArchive />
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <button
                            onClick={() => handleRestore(item)}
                            className="tooltip"
                            data-tooltip="Restore"
                          >
                            <LiaHistorySolid />
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleDelete(item)}
                            className="tooltip"
                            data-tooltip="Delete"
                          >
                            <LiaTrashAltSolid />
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {store.isActive && (
        <ModalConfirm
          position="center"
          queryKey="category"
          endpoint={`/v1/category/active/${id}`}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          position="center"
          endpoint={`/v1/category/${id}`}
          queryKey="category"
        />
      )}
    </>
  );
};

export default CategoryTable;
