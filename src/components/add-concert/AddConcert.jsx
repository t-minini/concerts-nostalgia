import React, { useState } from 'react';
import {
  Row,
  Col,
  Flex,
  Modal,
  Button,
  Tooltip,
  Form,
  Input,
  Select,
  Upload,
  message,
  DatePicker,
  ConfigProvider,
} from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import { api } from '../../api/concerts-nostalgia-api';

export function AddConcert() {
  // const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [rate, setRate] = useState();

  const [concert, setConcert] = useState({
    tour: '',
    artist: '',
    year: 0,
    location: '',
    city: '',
    country: '',
    companion: [],
    rating: 1,
    background: 'background-one',
  });

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

  const showModal = () => {
    setOpen(true);
  };

  function handleChange(event) {
    setConcert({ ...concert, [event.target.name]: event.target.value });
  }

  function handleRating(event, newValue) {
    setRate(newValue);
    setConcert({ ...concert, [event.target.name]: event.target.value });
  }

  const handleCancel = () => {
    setOpen(false);
    setConcert({
      tour: '',
      artist: '',
      year: 0,
      location: '',
      city: '',
      country: '',
      rating: 0,
      background: '',
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post('/concerts/add', concert);

      console.log(response);
      setConcert(response.data);
      message.success('Concert created successfully!');
    } catch (error) {
      console.log('Error creating concert:', error);
      message.error('Failed to create concert!');
    }
    setOpen(false);
  }

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              defaultColor: '#212121', // font color Cancel Button
              defaultHoverColor: '#e34bf0', // font color hover Cancel Button
              defaultBorderColor: '#ffffff', // border Cancel Button
              defaultHoverBorderColor: '#e34bf0',
              defaultBg: '#ffffff',
              defaultHoverBg: '#212121', // background hover Cancel Button
            },
          },
        }}
      >
        <Tooltip title="New Concert">
          <Button
            onClick={showModal}
            shape="circle"
            icon={<PlusOutlined />}
            size="large"
          />
        </Tooltip>
      </ConfigProvider>
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
              defaultHoverBg: '#212121', // background hover Cancel Button
              defaultColor: '#ffffff', // font color Cancel Button
              defaultHoverColor: '#e34bf0', // font color hover Cancel Button
              defaultBorderColor: '#212121', // border Cancel Button
              defaultHoverBorderColor: '#212121',
              defaultBg: '#212121',
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
          onCancel={handleCancel}
          centered
        >
          <Form
            {...formItemLayout}
            layout={'vertical'}
            // form={form}
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
                    <Input
                      name="tour"
                      placeholder="enter tour"
                      value={concert.tour}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>location</label>}
                  >
                    <Input
                      name="location"
                      placeholder="enter location"
                      value={concert.location}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>country</label>}
                  >
                    <Input
                      name="country"
                      placeholder="enter country"
                      value={concert.country}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item
                    name="rating"
                    label={<label style={{ color: '#ffffff' }}>rating</label>}
                    onChange={handleRating}
                    value={concert.rating}
                  >
                    <Select
                      placeholder="choose a rate"
                      name="rating"
                      value={concert.rating}
                      onChange={(value) =>
                        setConcert({ ...concert, rating: parseInt(value, 10) })
                      }
                    >
                      <Select.Option value={1}>1</Select.Option>
                      <Select.Option value={2}>2</Select.Option>
                      <Select.Option value={3}>3</Select.Option>
                      <Select.Option value={4}>4</Select.Option>
                      <Select.Option value={5}>5</Select.Option>
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
                    <Input
                      name="artist"
                      placeholder="enter artist"
                      value={concert.artist}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>year</label>}
                  >
                    <DatePicker
                      name="year"
                      placeholder="enter year"
                      // value={concert.year}
                      picker="year"
                      style={{
                        width: 240,
                      }}
                      onChange={(date, dateString) => {
                        const year = date ? date.year() : 0;
                        setConcert({ ...concert, year });
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>city</label>}
                  >
                    <Input
                      name="city"
                      placeholder="enter city"
                      value={concert.city}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item
                    label={
                      <label style={{ color: '#ffffff' }}>ticket style</label>
                    }
                    onChange={handleChange}
                  >
                    <Select
                      placeholder="choose ticket style"
                      name="background"
                      value={concert.background}
                      onChange={(value) =>
                        setConcert({ ...concert, background: value })
                      }
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
            <Form.Item
              label={<label style={{ color: '#ffffff' }}>images</label>}
            >
              <Form.Item name="dragger" valuePropName="fileList" noStyle>
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
