import React, {ChangeEvent, memo, useCallback, useEffect} from 'react';

type Props = {
    value: string,
        onChange: (title: string) => void,
}
  const EditableSpan = ({value, onChange}: Props) => {
    const [title, setTitle] = React.useState<string>(value);
    const [editMode, setEditMode] = React.useState<boolean>(false);
    useEffect(() => {
        setTitle(value);
    }, [value]);
    const changeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    },[])
    const turnOnEditMode = useCallback(() => {
        setEditMode(true)
    },[])
    const turnOffEditMode = useCallback(() => {
        onChange(title.trim())
        setEditMode(false)
    },[onChange,title])
    const keyDownHandler = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setEditMode(false)
            onChange(title.trim())
        }
    },[onChange,title])
      console.log('editable span render')
    return (

        <>
            {editMode ?
                <input onChange={changeValue} onBlur={turnOffEditMode}
                       value={title} autoFocus={true} onKeyDown={keyDownHandler}/>
                :
                <span onDoubleClick={turnOnEditMode} style={{opacity: value!=='empty' ? 1 : 0.5}}>
               {value}
                </span>
            }
        </>
    );
}
const propsAreEqual = (prevProps: Props, nextProps: Props) =>
    prevProps.value === nextProps.value &&
    prevProps.onChange === nextProps.onChange;
export default memo(EditableSpan, propsAreEqual);
