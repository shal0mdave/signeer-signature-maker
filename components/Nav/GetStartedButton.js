
import { Typography } from 'antd';
import { FormOutlined } from '@ant-design/icons';

const { Link } = Typography;

const GetStartedButton = () => {

	return (
		<Link href="#signature-builder" className="btn ant-btn ant-btn-default ant-btn-lg">
			<FormOutlined /> Get Started
		</Link>
	)
}

export default GetStartedButton;