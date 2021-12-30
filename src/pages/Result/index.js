import Container from "../../components/Container";
import ResultSection from "../../components/ResultSection";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { SURVEY } from "../../constants";

const Result = ({ userName, score, setScore }) => {
	const convertedScore = Math.floor((score / SURVEY.length) * 20);
	return (
		<Container>
			<ResultSection convertedScore={convertedScore} userName={userName}></ResultSection>
			<Link to="/">
				<Button text="설문 다시하기" onClick={() => setScore(0)}></Button>
			</Link>
		</Container>
	);
};

export default Result;
