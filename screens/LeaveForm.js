import { Text, View, TextInput, Button, Alert, StyleSheet, ScrollView, Pressable, Platform, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";


export default function LeaveForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = data => {
    console.log(data);
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };


  const initialDate = new Date(); // Initial date for both start and end
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [startInputValue, setStartInputValue] = useState('');
  const [endInputValue, setEndInputValue] = useState('');

  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(Platform.OS === 'Android');
    setStartDate(currentDate);
    setStartInputValue(currentDate.toISOString().split('T')[0]);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(Platform.OS === 'Android');
    setEndDate(currentDate);
    setEndInputValue(currentDate.toISOString().split('T')[0]);
  };

  const showStartDatepicker = () => {
    setShowStartDatePicker(true);
  };

  const showEndDatepicker = () => {
    setShowEndDatePicker(true);
  };


  const resetDates = () => {
    // Reset both start and end dates to the initial date
    setStartDate(initialDate);
    setEndDate(initialDate);
    setStartInputValue('');
    setEndInputValue('');
  };

{/*
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [endValue, setendValue] = useState('');




  const showDatepicker = () => {
    setShowPicker(true);
  };

  const onInputChange = (text) => {
    setInputValue(text);
  };
 
  const onInputChange2 = (text) => {
    setInputValue(text);
  };

  const Change = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'Android');
    setDate(currentDate);
    setInputValue(currentDate.toISOString().split('T')[0]); // Format date for TextInput
  };

  const Change2 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'Android');
    setDate(currentDate);
    setendValue(currentDate.toISOString().split('T')[0]); // Format date for TextInput
  };

*****************************************************************************************************************
*/}


{/*}
  const onSubmit = (data) => console.log(data);
  const [date,setDate]=useState(new Date());
  const [showPicker,setShowPicker]=useState(false);
  const [startLeave,setStartleave]=useState();
  const toggleDatepicker =()=>{
    setShowPicker(!showPicker);
  };

  const onChange =({type},selectedDate)=>{
        if(type==="set"){
            const currentDate=selectedDate;
            setDate(currentDate);

            if(Platform.OS==="android"){
                toggleDatepicker();
                setStartleave(currentDate.toDateString());
            }
        }else{
            toggleDatepicker();
        }
  };
*/}

  return (
    <View  style={style.container}>
     <Text style={style.label}>Enter name</Text>
     <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="First name"
            onBlur={onBlur}
            style={style.input}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="Name"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Text style={style.label}>Enter Id</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="12345"
            onBlur={onBlur}
            style={style.input}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="id"
      />
        
    <Text style={style.label}>Enter designation</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Nurse"
            onBlur={onBlur}
            style={style.input}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="designation"
      />

<Text style={style.label}>Enter Reason for leave</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            style={style.input}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="reason"
      />

  {/*
   <View>
    <Text style={style.label}>Date of commencing leave</Text>
    {setShowPicker &&(
        <DateTimePicker
        mode="date"
        display="spinner"
        value={date}
        onChange={onChange}

     />
    )}

    {!showPicker &&(
         <Pressable
            onPress={toggleDatepicker}
         >
         <TextInput
             style={style.input}
             onChangeText={setStartleave}
             value={startLeave}
             editable={false}
         />
      </Pressable>
     
    )}
    </View>
    **************************************************************************************
    */}

{/*
    <View>
    <Text style={style.label}>Date of commencing leave</Text>
    <Text>{date?.toString()}</Text>
      <DatePicker
          mode="date"
          modal
          open={open}

          date={date}
          onConfirm={value=>{
            setOpen(false);
            setDate(value);

          }}
          onCancel={()=>{
            setOpen(false);
          }}
        />
        <TouchableOpacity onPress={()=>setOpen(true)}>
          <Text>Open date picker</Text>
        </TouchableOpacity>
    </View>
        */}


{/*
<View>
      <View>
      <Text style={style.label}>Date of Commencing leave</Text>

        <TextInput
          placeholder="Select Date"
          value={inputValue}
          editable={false}
          style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}
          onChangeText={onInputChange} // This is where the magic happens

        />
        <Button onPress={showDatepicker} title="Show Date Picker" />
      </View>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date" // Change to 'time' for time picker
          is24Hour={true}
          display="default"
          onChange={Change}
        />
      )}
      <View>
        <Text>Selected Date: {date.toISOString().split('T')[0]}</Text>
      </View>
    </View>


    <View>
      <View>
      <Text style={style.label}>Date of Ending leave</Text>

        <TextInput
          placeholder="Select Date"
          value={endValue}
          editable={false}
          style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}
        />
        <Button onPress={showDatepicker} title="Show Date Picker" />
      </View>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker2"
          value={date}
          mode="date" // Change to 'time' for time picker
          is24Hour={true}
          display="default"
          onChange={Change2}
        />
      )}
      <View>
        <Text>Selected Date: {date.toISOString().split('T')[0]}</Text>
      </View>
    </View>
      */}


<View>
      <View>
        <Text>Date of Commencing Leave:</Text>
        <TextInput
          placeholder="Select Start Date"
          value={startInputValue}
          editable={false}
          style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}
        />
        <Button onPress={showStartDatepicker} title="Select Start Date" />
      </View>

      {showStartDatePicker && (
        <DateTimePicker
          testID="startDateTimePicker"
          value={startDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onStartDateChange}
        />
      )}

      <View>
        <Text>Date of Ending Leave Date:</Text>
        <TextInput
          placeholder="Select End Date"
          value={endInputValue}
          editable={false}
          style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}
        />
        <Button onPress={showEndDatepicker} title="Select End Date" />
      </View>

      {showEndDatePicker && (
        <DateTimePicker
          testID="endDateTimePicker"
          value={endDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onEndDateChange}
        />
      )}

      <View style={style.button}>
         <Button onPress={resetDates} title="Reset Dates" />
        <Text>Selected Date Range:</Text>
        <Text>Start Date: {startInputValue}</Text>
        <Text>End Date: {endInputValue}</Text>
      </View>
    </View>
        
    <View style={style.button}>
        <Button 
            title="Reset"
            onPress={()=>{
                reset({
                    Name:'',
                    id:'',
                    designation:'',
                    reason:'',
                })
            }}
        />
    </View>

    <View style={style.button}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>

    </View>
  )
}

const style=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
       // paddingTop: Constants.statusBarHeight,
        padding: 8,
        backgroundColor: '#243E4F',
      },
      input: {
        backgroundColor: 'white',
        borderColor: 'none',
        height: 40,
        padding: 10,
        borderRadius: 4,
      },
      label: {
        color: 'white',
        margin: 10,
        marginLeft: 0,
      },
      button:{
        marginTop: 20,
        color: 'white',
        height: 40,
        borderRadius: 4,
      }
})