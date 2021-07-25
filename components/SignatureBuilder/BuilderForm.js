import { Typography, Form, Input, InputNumber, Select, Button, Row, Col } from 'antd';

const { Title } = Typography;

const BuilderForm = (props) => {
    return (
        <div className="form-container">
            <Title level={4}>Style your signature </Title>
            <Form
                layout="vertical"
                name="signature"
                size="large"
                initialValues={props.formInitialValues}
                onFinish={props.handleSubmit}
            >
                <Form.Item
                    label="Enter your name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter a name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Select a font"
                    name="font">
                    <Select>
                        {props.fonts.map(font => <Select.Option key={font} value={font}><span style={{ fontFamily: font }}>{font}</span></Select.Option>)}
                    </Select>
                </Form.Item>
                <Row gutter={{ lg: 32 }}>
                    <Col xs={{ span: 24 }} lg={{ span: 14 }}>
                        <Form.Item
                            label="Pick a colour"
                            name="colour"
                        >
                            <Input type="color" />
                        </Form.Item>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 10 }}>
                        <Form.Item
                            label="Font size"
                            name="size"
                        >
                            <Input type="number" max={60} />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Create signature</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default BuilderForm;