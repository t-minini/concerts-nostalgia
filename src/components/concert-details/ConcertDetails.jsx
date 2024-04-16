import { useState, useEffect } from 'react';
import { api } from '../../api/concerts-nostalgia-api';
import { useNavigate } from 'react-router-dom';
import {
  Row,
  Col,
  Flex,
  Modal,
  Form,
  Input,
  Select,
  Upload,
  ConfigProvider,
  Button,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export function ConcertDetails(currentConcert) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [rate, setRate] = useState();
  const [confirmLoading, setConfirmLoading] = useState(false);
  // console.log(currentConcert.concerts._id);

  const showModal = () => {
    setOpen(true);
  };

  const [concert, setConcert] = useState({
    tour: '',
    artist: '',
    year: 0,
    location: '',
    city: '',
    country: '',
    rating: 1,
    background: 'background-one',
  });

  useEffect(() => {
    async function fetchConcerts() {
      try {
        const response = await api.get(
          `/concerts/${currentConcert.concerts._id}`
        );
        setConcert(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchConcerts(currentConcert.concerts._id);
  }, [currentConcert.concerts._id]);

  const handleCancel = () => {
    setOpen(false);
    setEditMode(false);
  };

  function handleChange(event) {
    setConcert({ ...concert, [event.target.name]: event.target.value });
  }

  function handleEdit() {
    setEditMode(true);
  }

  async function handleSubmit(event) {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
    event.preventDefault();
    try {
      const clone = { ...concert };

      delete clone._id;
      await api.put(`/concerts/edit/${currentConcert.concerts._id}`, clone);
      // navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      await api.delete(`/concerts/delete/${currentConcert.concerts._id}`);
    } catch (error) {
      console.log(error);
    }
    setOpen(false);
  }

  function handleRating(event, newValue) {
    setRate(newValue);
    setConcert({ ...concert, [event.target.name]: event.target.value });
  }

  // const onDateChange = (date, dateString) => {
  //   console.log(date, dateString);
  // };

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
  return (
    <>
      <span
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        onClick={showModal}
      ></span>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: '#212121',
              headerBg: '#212121',
              titleFontSize: '40px',
              titleLineHeight: '1.2',
              colorIcon: '#ffffff',
              titleColor: '#ffffff',
              colorIconHover: '#e34bf0',
            },
            Input: {
              activeBorderColor: '#e34bf0',
              hoverBorderColor: '#e34bf0',
              colorBgContainerDisabled: '#ffffff',
            },
            Select: {
              colorPrimaryHover: '#e34bf0',
              colorPrimary: '#e34bf0',
              colorBgContainerDisabled: '#ffffff',
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
          title="concert details"
          width="550px"
          closeIcon={null}
          open={open}
          onOk={handleSubmit}
          okText="Save"
          cancelText="Delete"
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          centered
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleEdit}>
              Edit
            </Button>,
          ]}
        >
          <Form
            {...formItemLayout}
            layout={'vertical'}
            // form={form}
            // initialValues={{
            //   layout: formLayout,
            // }}
            // onValuesChange={onFormLayoutChange}
            style={{
              backgroundColor: '#212121',
            }}
            onSubmit={handleSubmit}
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
                      value={currentConcert.concerts.tour}
                      onChange={handleChange}
                      disabled={!editMode}
                    />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>location</label>}
                  >
                    <Input
                      name="location"
                      placeholder="enter location"
                      value={currentConcert.concerts.location}
                      onChange={handleChange}
                      disabled={!editMode}
                    />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>country</label>}
                  >
                    <Input
                      name="country"
                      placeholder="enter country"
                      value={currentConcert.concerts.country}
                      onChange={handleChange}
                      disabled={!editMode}
                    />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>rating</label>}
                    onChange={handleRating}
                  >
                    <Select
                      placeholder="choose a rate"
                      // onChange={onThemeChange}
                      name="rating"
                      value={currentConcert.concerts.rating}
                      disabled={!editMode}
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
                      value={currentConcert.concerts.artist}
                      onChange={handleChange}
                      disabled={!editMode}
                    />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>city</label>}
                  >
                    <Input
                      name="year"
                      placeholder="enter year"
                      value={currentConcert.concerts.year}
                      onChange={handleChange}
                      disabled={!editMode}
                    />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>city</label>}
                  >
                    <Input
                      name="city"
                      placeholder="enter city"
                      value={currentConcert.concerts.city}
                      onChange={handleChange}
                      disabled={!editMode}
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
                      // onChange={onThemeChange}
                      name="background"
                      // type="text"
                      value={currentConcert.concerts.background}
                      disabled={!editMode}
                    >
                      <Select.Option value="background-one">
                        style one
                      </Select.Option>
                      <Select.Option value="background-two">
                        style two
                      </Select.Option>
                      <Select.Option value="background-three">
                        style three
                      </Select.Option>
                      <Select.Option value="background-four">
                        style four
                      </Select.Option>
                      <Select.Option value="background-five">
                        style five
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
