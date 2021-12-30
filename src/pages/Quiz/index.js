import { useState } from "react";
import { useHistory } from "react-router";
import AnswerGroup from "../../components/AnswerGroup";
import Container from "../../components/Container";
import QuestionSection from "../../components/QuestionSection";
import { SURVEY } from "../../constants";

const Quiz = ({ setScore }) => {
	const [currentNo, setCurrentNo] = useState(0);
	let history = useHistory();

	const handleClick = (agree) => {
		setScore((score) => score + agree);
		// 마지막 퀴즈인지 체크하기
		if (currentNo === SURVEY.length - 1) {
			history.push("/result");
		} else {
			setCurrentNo((currentNo) => currentNo + 1);
		}
	};

	return (
		<Container>
			<QuestionSection currentNo={currentNo} />
			<AnswerGroup currentNo={currentNo} handleClick={handleClick} />
		</Container>
	);
};
export default Quiz;
