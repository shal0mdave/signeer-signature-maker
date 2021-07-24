import { Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Link } = Typography;

const GithubLink = () => {

	return (
		<Link href="https://github.com/shal0mdave" target="_blank">
			<GithubOutlined /> Github
		</Link>
	)
}

export default GithubLink;