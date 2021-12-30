import Container from "../../components/Container";
import styled from "styled-components";
import dialect from "../../assets/images/dialect.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const Title = styled.h1`
	font-size: 30px;
	font-weight: bold;
	margin: 8px 0px;
	text-align: center;
	color: ${(props) => props.theme.primaryColor100};
`;

const SubTitle = styled.h1`
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 24px;
	text-align: center;
	color: ${(props) => props.theme.gray80};
`;

const StyledImage = styled.img`
	border-radius: 16px;
	opacity: 80%;
	margin-bottom: 16px;
	max-width: 100%;
	display: block;
`;

const Landing = ({ setUserName }) => {

	const handleChange = (e) => {
		setUserName((userName) => e.target.value);
		
	};

	return (
	<Container>
		<Title>경상도 사투리 능력 고사</Title>
		<SubTitle>나는 경상도 사투리를 얼마나 잘 알고 있을까?<br /> 나의 경상도 사투리 능력 테스트!</SubTitle>
		<StyledImage src={dialect} alt="dialect"></StyledImage>

		<Input handleChange={handleChange}></Input>

		<Link to="/quiz">
			<Button text="지금바로 응시하기"></Button>
		</Link>
	</Container>
	)
};

export default Landing;
