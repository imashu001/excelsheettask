import {useState, useEffect} from 'react'
import './table.css'
import {tbc, totalFinalBasicCost,totalTax,finalPrice,totaldiscount} from './utils'
import { useSelector , useDispatch} from 'react-redux';
import { deleteRowInitiate, getPostRowInitiate, postRowInitiate } from '../redux/actions';


const inputobj = [
  {
    name: '#',
    disable: true
  },
  {
    name: 'name',
    disable: false
  },
  {
    name: 'rate',
    disable: false
  },
  {
    name: 'quantity',
    disable: false
  },{
    name: 'basicCost',
    disable: true
  },
  {
    name: 'discount',
    disable: false
  },
  {
    name: 'discountAmount',
    disable: true
  },
  {
    name: 'finalBasicCost',
    disable: true
  },
  {
    name: 'taxes',
    disable: false,
  },
  {
    name: 'taxAmount',
    disable: true
  },
  {
    name: 'totalBasicCost',
    disable: true
  }
]
const initalState = {
  totalBasicCost: 0,
  taxAmount: 0,
  taxes:0,
  finalBasicCost:0,
  discountAmount: 0,
  discount: 0,
  basicCost: 0,
  quantity: 0,
  rate: 0,
  name: 0
}


const Table = () => {

  const reduxState = useSelector(state => state.reducer)
  console.log(reduxState,"dslknfsdklknlkmnlknmlkn")

  const dispatch = useDispatch()

  const handleDelete = (idx) => {
    console.log(idx,"idx")
    dispatch(deleteRowInitiate(idx))
  }
  useEffect(() => {
    console.log("USE EFFECT RUNNNG")
    dispatch(getPostRowInitiate())
  }, []);
  

  const [state, setState] = useState(initalState)
  const [toggle,setToggle] = useState(false)

  const {
    totalBasicCost,
    taxAmount,
    taxes,
    finalBasicCost,
    discountAmount,
    discount,
    basicCost,
    quantity,
    rate,
    name
  } =state

  
  const getBaseicCost = (rate,quantity) => rate * quantity;
  const getDiscountAmout = (basicCost, discount) => (basicCost * discount) / 100 ;
  const getFinalBasicCost = (basicCost,discountAmount) => basicCost - discountAmount
  const gettaxAmount = (finalCost,tax) => (finalCost * tax) /100
  const gettotalBasicCost = (finalbasicamount, taxAmount) => finalbasicamount + taxAmount
  const onChange = (e) => {
    e.preventDefault()
    // return console.log(e.target)
    let {name,value} = e.target
    if(name==='#') {
      return ''
    }
    value =  parseFloat(value) || value
    let newState = {...state, [name] : value}
    if(name === 'rate' || name === 'quantity') {
      let newBasicCost = getBaseicCost(name === 'rate' ? value : rate , name === 'quantity' ? value : rate)
      let newDiacountAmmout = getDiscountAmout(newBasicCost,discount)
      let newFinalbasicCost = getFinalBasicCost(newBasicCost, newDiacountAmmout)
      let newTaxAmmout = gettaxAmount(newFinalbasicCost, taxes)
      let newFinalAmmount = gettotalBasicCost(newFinalbasicCost,newTaxAmmout)
      newState = {
        ...newState,
        basicCost: newBasicCost,
        discountAmount: newDiacountAmmout,
        finalBasicCost: newFinalbasicCost,
        taxAmount: newTaxAmmout,
        totalBasicCost: newFinalAmmount
      }
    }
    if(name === 'discount') {
      let newDiacountAmmout = getDiscountAmout(basicCost,value)
      let newFinalbasicCost = getFinalBasicCost(basicCost, newDiacountAmmout)
      let newTaxAmmout = gettaxAmount(newFinalbasicCost, taxes)
      let newFinalAmmount = gettotalBasicCost(newFinalbasicCost,newTaxAmmout)
      newState = {
        ...newState,
        discountAmount: newDiacountAmmout,
        finalBasicCost: newFinalbasicCost,
        taxAmount: newTaxAmmout,
        totalBasicCost: newFinalAmmount
      }
    }
    if(name === 'taxes') {
      let newTaxAmmout = gettaxAmount(finalBasicCost, value)
      let newFinalAmmount = gettotalBasicCost(finalBasicCost,newTaxAmmout)
      newState = {
        ...newState,
        taxAmount: newTaxAmmout,
        totalBasicCost: newFinalAmmount
      }
    }
    setState(newState)
  }


  const handleClick= () => {
    dispatch(postRowInitiate(state))
  }
  const handleToggle  = () => {
    setToggle((t) =>!t)
  } 


  return(
    <div>
      <h1>INVOICE - 1</h1>
      <div>
        <div className="btn-container">
        <div className="add-btn" onClick={handleToggle}>Add new item</div>
        </div>
        <table>
        <thead>
          <tr className="h1">
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>rate*quantity</th>
          <th></th>
          <th>(basiccost*discount)/100</th>
          <th></th>
          <th>(finalcost*10)/100</th>
          <th></th>
          <th>FinalBasicCost+TaxAmt</th>
          <th></th>
          </tr>
        </thead>
        <thead>
          <tr className="h2">
          <th>#</th>
          <th>Name</th>
          <th>Rate</th>
          <th>Quantity</th>
          <th>Basic Cost</th>
          <th>Discount (%)</th>
          <th>Discount Amount</th>
          <th>Final Basic Cost</th>
          <th>Taxes</th>
          <th>Total Tax Amount</th>
          <th>Cost</th>
          <th>Tools</th>
          </tr>
        </thead>
        {reduxState.data.map((itm,idx) => 
          (<tr>
            <td className="dark" >{idx+1}</td>
            <td className="light">{itm.name}</td>
            <td className="light">{itm.rate}</td>
            <td className="light">{itm.quantity}</td>
            <td className="dark">{itm.basicCost}</td>
            <td className="light">{itm.discount}</td>
            <td className="dark">{itm.discountAmount}</td>
            <td className="dark">{itm.finalBasicCost}</td>
            <td className="light">{itm.taxes}</td>
            <td className="dark">{itm.taxAmount}</td>
            <td className="dark">{itm.totalBasicCost}</td>
            <td className="light" onClick={() => handleDelete(itm._id)}>Delete</td>
          </tr>)
        )}
        <tr>
          
        {toggle && inputobj.map((obj) => (
            <td>
                <input value={state[obj.name]} name={obj.name} onChange={onChange} disabled={obj.disable ? 'disabled' : ''}/>
            </td>
          ))}
          </tr>
        <div className="calculator">
        <tr>
          <td className="save-btn">Total Basic Cost</td>
          <td className="save-btn"> {tbc(reduxState.data)} </td>
        </tr>
        <tr>
          <td className="light">Total Discount</td>
          <td className="light">{totaldiscount(reduxState.data)}</td>
        </tr>
        <tr>
          <td className="light">Total Final Basic Cost</td>
          <td className="light">{totalFinalBasicCost(reduxState.data)}</td>
        </tr>
        <tr>
          <td className="light">Total Tax</td>
          <td className="light">{totalTax(reduxState.data)}</td>
        </tr>
        <tr>
          <td className="light">Final Price</td>
          <td className="light">{finalPrice(reduxState.data)}</td>
        </tr>
        </div>
        </table>

        <div className="save-btn-container">
        <div className="save-btn" onClick={handleClick}>
          Save
        </div>
        </div>

      </div>
    </div>
  )
}
export default Table