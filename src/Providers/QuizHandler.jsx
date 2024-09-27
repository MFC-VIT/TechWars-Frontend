import { useRecoilValue } from "recoil"
import { teamAtom } from "../atoms/teamAtom"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";


export const QuizHandler = ({ children })=>{
  const teamData = useRecoilValue(teamAtom);
  const navigate = useNavigate()
  if (teamData.isQuizOver){
    return navigate("/lobby");
  }
  return <>
    {children}
  </>
}

QuizHandler.propTypes = {
  children: PropTypes.func
}