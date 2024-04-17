import { useState, useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { api } from '../../api/concerts-nostalgia-api';
import {
  modalTheme,
  inputTheme,
  selectTheme,
  simpleBtnTheme,
  rainbowBtnTheme,
  datePickerTheme,
} from '../../styles/antdesign-themes';
import {
  Row,
  Col,
  Flex,
  Form,
  Input,
  Modal,
  Select,
  Upload,
  Button,
  ConfigProvider,
} from 'antd';

export function ConcertDetails(currentConcert) {
  const [rate, setRate] = useState();
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [concertData, setConcertData] = useState(currentConcert.concerts);

  function showModal() {
    setOpen(true);
  }

  useEffect(() => {
    setConcertData(currentConcert.concerts);
  }, [currentConcert.concerts]);

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

  function handleCancel() {
    setOpen(false);
    setEditMode(false);
  }

  function handleChange(event) {
    setConcertData({ ...concertData, [event.target.name]: event.target.value });
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
      const clone = { ...concertData };

      delete clone._id;
      await api.put(`/concerts/edit/${concertData._id}`, clone);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      await api.delete(`/concerts/delete/${concertData._id}`);
    } catch (error) {
      console.log(error);
    }
    setOpen(false);
  }

  function handleRating(value) {
    console.log('Selected rating:', value);
    setRate(value);
    setConcert({ ...concertData, rating: value });
  }

  const editAndSaveBtn = editMode ? (
    <>
      <ConfigProvider theme={simpleBtnTheme}>
        <Button onClick={handleDelete} style={{ width: '80px' }}>
          Delete
        </Button>
      </ConfigProvider>
      <ConfigProvider theme={rainbowBtnTheme}>
        <Button
          type="primary"
          onClick={handleSubmit}
          style={{ width: '100px' }}
        >
          Save
        </Button>
      </ConfigProvider>
    </>
  ) : (
    <ConfigProvider theme={rainbowBtnTheme}>
      <Button type="primary" onClick={handleEdit} style={{ width: '100px' }}>
        Edit
      </Button>
    </ConfigProvider>
  );

  return (
    <>
      <span
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        onClick={showModal}
      ></span>
      <ConfigProvider
        theme={{
          components: {
            Modal: { ...modalTheme },
            Input: { ...inputTheme },
            Select: { ...selectTheme },
            DatePicker: { ...datePickerTheme },
          },
        }}
      >
        <Modal
          title="concert details"
          width="550px"
          open={open}
          onOk={handleSubmit}
          okText="Save"
          cancelText="Delete"
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          centered
          footer={[editAndSaveBtn]}
        >
          <Form
            layout={'vertical'}
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
                      value={concertData.tour}
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
                      value={concertData.location}
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
                      value={concertData.country}
                      onChange={handleChange}
                      disabled={!editMode}
                    />
                  </Form.Item>
                  <Form.Item
                    label={<label style={{ color: '#ffffff' }}>rating</label>}
                  >
                    <Select
                      placeholder="choose a rate"
                      name="rating"
                      value={concertData.rating}
                      disabled={!editMode}
                      onChange={handleRating}
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
                      value={concertData.artist}
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
                      value={concertData.year}
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
                      value={concertData.city}
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
                      name="background"
                      value={concertData.background}
                      disabled={!editMode}
                      onChange={(value) =>
                        setConcert({ ...concertData, background: value })
                      }
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
