// import style from './AddNewConcert.module.css';

import React, { useState } from 'react';
import {
  Row,
  Col,
  Flex,
  Modal,
  Form,
  Input,
  Select,
  Upload,
  DatePicker,
  ConfigProvider,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { api } from '../../api/concerts-nostalgia-api';
import { useNavigate } from 'react-router-dom';

export function AddConcert() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const [concert, setConcert] = useState({
    tour: '',
    artist: '',
    year: '',
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
    event.preventDefault();
    try {
      await api.post('/concerts/add', concert);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  }

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 20,
      },
      sm: {
        span: 20,
      },
    },
    wrapperCol: {
      xs: {
        span: 50,
      },
      sm: {
        span: 80,
      },
    },
  };

  const onThemeChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        break;
      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        break;
      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
        break;
      default:
    }
  };

  return (
    <>
      <button onClick={showModal}>Add New</button>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: '#212121',
              headerBg: '#212121',
              titleFontSize: '30px',
              colorIcon: '#ffffff',
              titleColor: '#ffffff',
              colorIconHover: '#e34bf0',
            },
            Input: {
              activeBorderColor: '#e34bf0',
              hoverBorderColor: '#e34bf0',
            },
            Select: {
              colorPrimaryHover: '#e34bf0',
              colorPrimary: '#e34bf0',
            },
            DatePicker: {
              colorPrimaryHover: '#e34bf0',
              colorPrimary: '#e34bf0',
            },
            Button: {
              colorPrimary: '#ffffff', // background Create Button
              primaryColor: '#212121', // font color Create Button
              colorPrimaryHover: '#e34bf0', //background hover Create Button
              defaultHoverBg: '#e34bf0', // background hover Cancel Button
              defaultColor: '#212121', // font color Cancel Button
              defaultHoverColor: '#ffffff', // font color hover Cancel Button
              defaultBorderColor: '#ffffff', // border Cancel Button
            },
          },
        }}
      >
        <Modal
          title="add new concert"
          width="550px"
          open={open}
          onOk={handleSubmit}
          okText="Create"
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          centered
        >
          <Form
            {...formItemLayout}
            layout={formLayout}
            form={form}
            // initialValues={{
            //   layout: formLayout,
            // }}
            onValuesChange={onFormLayoutChange}
            style={{
              backgroundColor: '#212121',
            }}
          >
            <Flex gap="middle" justify="space-between">
              <Row
                style={{
                  width: 240,
                }}
              >
                <Col span={24}>
                  <Form.Item
                    label={
                      <label style={{ color: '#ffffff' }}>tour / concert</label>
                    }
                  >
                    <Input placeholder="enter tour" value={concert.tour} />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>location</label>}
                  >
                    <Input
                      placeholder="enter location"
                      value={concert.location}
                    />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>country</label>}
                  >
                    <Input
                      placeholder="enter country"
                      value={concert.country}
                    />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>rating</label>}
                  >
                    <Select
                      placeholder="choose a rate"
                      onChange={onThemeChange}
                    >
                      <Select.Option value={concert.rating[0]}>1</Select.Option>
                      <Select.Option value={concert.rating[1]}>2</Select.Option>
                      <Select.Option value={concert.rating[2]}>3</Select.Option>
                      <Select.Option value={concert.rating[3]}>4</Select.Option>
                      <Select.Option value={concert.rating[4]}>5</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row
                style={{
                  width: 240,
                }}
              >
                <Col span={24}>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>artist</label>}
                  >
                    <Input placeholder="enter artist" value={concert.artist} />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>year</label>}
                  >
                    <DatePicker
                      placeholder="enter year"
                      value={concert.year}
                      picker="year"
                      style={{
                        width: 240,
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>city</label>}
                  >
                    <Input placeholder="enter city" value={concert.city} />
                  </Form.Item>
                  <Form.Item
                    label={
                      <label style={{ color: '#ffffff' }}>ticket style</label>
                    }
                  >
                    <Select
                      placeholder="choose ticket style"
                      onChange={onThemeChange}
                    >
                      <Select.Option value={concert.background[0]}>
                        Style One
                      </Select.Option>
                      <Select.Option value={concert.background[1]}>
                        Style Two
                      </Select.Option>
                      <Select.Option value={concert.background[2]}>
                        Style Three
                      </Select.Option>
                      <Select.Option value={concert.background[3]}>
                        Style Four
                      </Select.Option>
                      <Select.Option value={concert.background[4]}>
                        Style Five
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Flex>
            <Form.Item
              label={<label style={{ color: '#ffffff' }}>images</label>}
            >
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                // getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files" action="/upload.do" disabled>
                  <p className="ant-upload-drag-icon">
                    <UploadOutlined
                      style={{ fontSize: '40px', color: '#ffffff' }}
                    />
                  </p>
                  <p className="ant-upload-text" style={{ color: '#ffffff' }}>
                    Click or drag image to this area to upload
                  </p>
                  <p className="ant-upload-hint" style={{ color: '#ffffff' }}>
                    Support for a single or bulk upload
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </Form>
        </Modal>
      </ConfigProvider>
    </>
  );
}
