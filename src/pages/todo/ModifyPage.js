// import { useNavigate } from "react-router-dom";
import ModifyComponent from "../../components/todo/ModifyComponent";
import { useParams } from "react-router-dom";

const ModifyPage = () => {
  /*
  const navigate = useNavigate();

  const moveToRead = () => {
    navigate({ pathname: `/todo/read/${tno}` });
  };

  const moveToList = () => {
    navigate({ pathname: `/todo/list` });
  };
  */

  const { tno } = useParams();
  console.log("ModifyPage.js-- tno : ", tno);

  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">Todo Modify Page</div>

      <ModifyComponent tno={tno} />
    </div>
  );
};

export default ModifyPage;
