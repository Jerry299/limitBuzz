import { useNavigate, useParams } from "react-router-dom";
import { Spacer } from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { getSingleUser } from "../../services/apiService";
import { LoadingSpinner } from "../../components/Loader/Loader";

export interface UserInfoProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const User = () => {
  const [user, setUser] = useState<UserInfoProps>();
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  const fetchSingleUser = async (userid: string | undefined) => {
    setLoading(true);
    try {
      const res = await getSingleUser(userid);
      setUser(res);
      setLoading(false);
    } catch (error) {
      console.log(error); // we can display this with a toast
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSingleUser(id);
  }, [id]);

  const navigate = useNavigate();

  return (
    <div className="greyShadeOne fw400 ">
      <Spacer height={30} />
      {loading && (
        <div className="d-flex justify-center align-center">
          <LoadingSpinner />
        </div>
      )}
      {!loading && user && (
        <div className="width80 margin-auto fade-in">
          <div className="d-flex success">
            <p
              className="fw600 fontSize13 pointer"
              onClick={() => navigate(-1)}
            >
              BACK
            </p>
          </div>
          <p>User Information</p>
          <div>
            <div>
              <span className="fw600 fontSize14">Name: </span>
              <span className="fw400 fontSize13 pl20">{user?.name}</span>
            </div>
            <Spacer height={10} />
            <div>
              <span className="fw600 fontSize14">Username: </span>
              <span className="fw400 fontSize13 pl20">{user.username}</span>
            </div>
            <Spacer height={10} />
            <div>
              <span className="fw600 fontSize14">Email: </span>
              <span className="fw400 fontSize13 pl20">{user?.email}</span>
            </div>
            <Spacer height={10} />
            <div>
              <span className="fw600 fontSize14">City: </span>
              <span className="fw400 fontSize13 pl20">
                {user?.address.city}
              </span>
            </div>
            <Spacer height={10} />
            <div>
              <span className="fw600 fontSize14">Street: </span>
              <span className="fw400 fontSize13 pl20">
                {user?.address.street}
              </span>
            </div>
            <Spacer height={10} />
            <div>
              <span className="fw600 fontSize14">Phone Number: </span>
              <span className="fw400 fontSize13 pl20">{user.phone}</span>
            </div>
            <Spacer height={10} />
            <div>
              <span className="fw600 fontSize14">Website: </span>
              <span className="fw400 fontSize13 pl20">{user.website}</span>
            </div>
            <Spacer height={10} />
            <div>
              <span className="fw600 fontSize14">Company Name: </span>
              <span className="fw400 fontSize13 pl20">{user.company.name}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
