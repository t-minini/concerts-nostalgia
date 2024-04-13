import { useState, useEffect } from 'react';
import { api } from '../../api/concerts-nostalgia-api';
import { useParams, useNavigate } from 'react-router-dom';
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

export function ConcertInfo() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [rate, setRate] = useState();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const { id } = useParams();

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
    rating: 0,
    background: '',
  });

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
    navigate('/');
  };

  useEffect(() => {
    async function fetchConcerts() {
      try {
        const response = await api.get(`/concerts/${id}`);
        setConcert(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchConcerts(id);
  }, [id]);

  function handleChange(event) {
    setConcert({ ...concert, [event.target.name]: event.target.value });
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
      await api.put(`/concerts/edit/${id}`, clone);
      // navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  // async function handleDelete() {
  //   try {
  //     await api.delete(`/concerts/delete/${id}`);
  //     navigate('/home');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  function handleRating(event, newValue) {
    setRate(newValue);
    setConcert({ ...concert, [event.target.name]: event.target.value });
  }

  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
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
  return (
    <>
      <button onClick={showModal}>Edit</button>
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
          okText="Save"
          cancelText="Delete"
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          centered
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
                    label={<label style={{ color: '#ffffff' }}>rating</label>}
                    // onChange={handleChange}
                    onChange={handleRating}
                    value={rate}
                  >
                    <Select
                      placeholder="choose a rate"
                      // onChange={onThemeChange}
                      name="rating"
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
                      type="text"
                      placeholder="enter year"
                      // value={concert.year}
                      picker="year"
                      style={{
                        width: 240,
                      }}
                      onChange={onDateChange}
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
                      // onChange={onThemeChange}
                      name="background"
                      // type="text"
                      // value={concert.background}
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
