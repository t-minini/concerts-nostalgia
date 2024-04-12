// import style from './AddNewConcert.module.css';

import React, { useState } from 'react';
import { Modal, Form, Input, Select, Upload } from 'antd';
import { Row, Col, Flex } from 'antd';
import { api } from '../../api/concerts-nostalgia-api';
import { useNavigate } from 'react-router-dom';
import { InboxOutlined } from '@ant-design/icons';

export function AddConcert() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();
  // const [formLayout, setFormLayout] = useState('vertical');
  // const onFormLayoutChange = ({ layout }) => {
  //   setFormLayout(layout);
  // };

  const [modalAdd, setModalAdd] = useState({
    tour: '',
    artist: '',
    year: 0,
    location: '',
    city: '',
    country: '',
    companion: [],
    rating: 0,
    background: '',
  });

  const showModal = () => {
    setOpen(true);
  };
  async function handleSubmit(event) {
    // setModalAdd('The modal will be closed after two seconds');
    event.preventDefault();
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
    try {
      await api.post('/concerts/add', modalAdd);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  // const formItemLayout = {
  //   labelCol: {
  //     xs: {
  //       span: 20,
  //     },
  //     sm: {
  //       span: 20,
  //     },
  //   },
  //   wrapperCol: {
  //     xs: {
  //       span: 50,
  //     },
  //     sm: {
  //       span: 80,
  //     },
  //   },
  // };

  const onThemeChange = (value) => {
    // switch (value) {
    //   case 'male':
    //     form.setFieldsValue({
    //       note: 'Hi, man!',
    //     });
    //     break;
    //   case 'female':
    //     form.setFieldsValue({
    //       note: 'Hi, lady!',
    //     });
    //     break;
    //   case 'other':
    //     form.setFieldsValue({
    //       note: 'Hi there!',
    //     });
    //     break;
    //   default:
    // }
  };

  return (
    <>
      <button onClick={showModal}>Add New</button>
      <Modal
        title="add new concert"
        width="550px"
        open={open}
        onOk={handleSubmit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          // {...formItemLayout}
          // layout={formLayout}
          form={form}
          layout="vertical"
          // initialValues={{
          //   ,
          // }}
          // onValuesChange={onFormLayoutChange}
          // style={{
          //   maxWidth: 600,
          // }}
        >
          <Flex gap="middle" justify="space-between">
            <Row
              style={{
                width: 240,
              }}
            >
              <Col span={24}>
                <Form.Item label="tour/concert">
                  <Input placeholder="enter tour" />
                </Form.Item>
                <Form.Item label="location">
                  <Input placeholder="enter location" />
                </Form.Item>
                <Form.Item label="country">
                  <Input placeholder="enter country" />
                </Form.Item>
                <Form.Item label="rating">
                  <Input placeholder="choose rate" />
                </Form.Item>
              </Col>
            </Row>
            <Row
              style={{
                width: 240,
              }}
            >
              <Col span={24}>
                <Form.Item label="artist">
                  <Input placeholder="enter artist" />
                </Form.Item>
                <Form.Item label="year">
                  <Input placeholder="enter year" />
                </Form.Item>
                <Form.Item label="city">
                  <Input placeholder="enter city" />
                </Form.Item>
                <Form.Item name="style" label="ticket style">
                  <Select
                    placeholder="choose a ticket style"
                    onChange={onThemeChange}
                  >
                    <Select.Option value="background-one">
                      Style One
                    </Select.Option>
                    <Select.Option value="background-two">
                      Style Two
                    </Select.Option>
                    <Select.Option value="background-three">
                      Style Three
                    </Select.Option>
                    <Select.Option value="background-four">
                      Style Four
                    </Select.Option>
                    <Select.Option value="background-five">
                      Style Five
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Flex>
          <Form.Item label="images">
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              // getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
