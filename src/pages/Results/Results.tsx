import { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  AppButton,
  AppInput,
  EmptyComponent,
  Spacer,
} from "../../components/Layout/Layout";
import { ResultCard } from "../../components/Results/ResultsCard";
import { getUsers } from "../../services/apiService";
import { LoadingSpinner } from "../../components/Loader/Loader";
import { CommentsProps } from "../../services/apiService";

export const Results = () => {
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [filteredResult, setFilteredResult] = useState<CommentsProps[]>([]);
  // const [error, setError] = useState<string>("");

  const searchResult = useCallback(
    (data: []) => {
      return data?.filter(
        (item: CommentsProps) =>
          item.email?.toLowerCase()?.includes(input.toLowerCase()) ||
          item.name?.toLowerCase()?.includes(input.toLowerCase())
      );
    },
    [input]
  );

  const handleSearch = () => {
    setFilteredResult(searchResult(data));
  };

  const pageLoad = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setData(res);
      setFilteredResult(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    pageLoad();
  }, []);

  return (
    <div className="greyShadeOne">
      <Spacer height={30} />
      <div>
        <div className="width80 margin-auto">
          <p className="text-center fontSize-13em fw600">All Users</p>
          <div className="search-wrapper">
            <AppInput
              type="text"
              className=""
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
              }
              placeholder="Search for a user by name or email..."
              outerClassName="width65 "
            />
            <Spacer height={15} />
            <AppButton
              isBusy={false}
              name="Search For A User"
              onClick={() => handleSearch()}
              className="bg-blue px-15 white-text py-10"
            />
          </div>
        </div>
        <Spacer height={60} />
        {loading && (
          <div className="d-flex justify-center align-center">
            <LoadingSpinner />
          </div>
        )}
        {filteredResult && filteredResult.length > 0 ? (
          <div className="width80 margin-auto grid-template-columns fade-in">
            {filteredResult?.map((item) => (
              <div key={item.email}>
                <ResultCard
                  name={item.name}
                  email={item.email}
                  userid={item.id}
                  phoneNumber={item.phone}
                />
                <Spacer height={30} />
              </div>
            ))}
          </div>
        ) : (
          <div className="width80 margin-auto">
            {!loading && <EmptyComponent />}
          </div>
        )}
      </div>
    </div>
  );
};
