import { Link } from "react-router-dom";
import { Spacer } from "../Layout/Layout";
import "./ResultsCard.css";

interface UserCardprops {
  name: string;
  email: string;
  phoneNumber?: string;
  userid?: string | number;
}

export const ResultCard = ({
  name,
  email,
  phoneNumber,
  userid,
}: UserCardprops) => {
  return (
    <div className="result-card-wrapper d-flex align-center">
      <div className="">
        <div>
          {/* <span className="fw600">Name: </span> */}
          <span className="fw400 fontSize13">{name}</span>
        </div>
        <Spacer height={10} />
        <div>
          {/* <span className="fw600">Email: </span> */}
          <span className="fw400 fontSize13">{email}</span>
        </div>
        <Spacer height={10} />
        <div className="">
          {/* <span className="fw600">Phone No: </span> */}
          <span className="fw400 fontSize13">{phoneNumber}</span>
        </div>
        <Spacer height={30} />
        <div className="">
          <Link to={`/user/${userid}`} className="link fontSize14 fw400">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export const UserDetailCard = () => {
  return (
    <div>
      <div>dix</div>
    </div>
  );
};
