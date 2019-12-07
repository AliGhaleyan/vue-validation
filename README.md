# Vue Validation!  
## install
run this command :
```
npm i --save vue-validation-serjik
```

#### usage :  
``` javascript  
import Vue from 'vue'

// ....
// .... another Code
// ....

import VueValidate from 'vue-validation-serjik'  

Vue.use(VueValidate)
```  

#### in component :
``` html  
<template>
	<div>
		// ....

		<input type="text" v-model="data.test" v-validate:rulename.another.any="data.test" validate-label='label text'>

		// ...
	<div>
</template>
<script>
	/**	javascript **/
</script>
<style>
	/**	style **/
</style>
```

#### example :
``` html
<input type="text" v-model="form.first_name" v-validate:string.min:5.max:25="form.first_name" validate-label='first name' />
```


#### check all validates :
```javascript
import { checkAllValidations } from 'vue-validation-serjik';

//  use function in any where
//  return result boolean if has an error it is true and else it is false
let result = checkAllValidations();
```

#### reset all validates :
```javascript
import { resetAllValidations } from 'vue-validation-serjik';

//  use function in any where
//  return result boolean if has an error it is true and else it is false
//  when change component run this function
resetAllValidations(); // return true
```
  
  
## Rules :  
> **Note**:  when use rules must be split with `.` like this, `rule1.rule2.rule3`  
  
|title          | description                |use                         |  
|---------------|--------------------------------|----------------------------|  
|string          |check the value is string      |`string`                     |  
|integer         |check the value is number      |`integer`                    |  
|min             |check value length lower than this|`min:{number}` like this `min:25`|  
|max             |check value length bigger than this|`max:{number}` like this `max:50`|  
|required        |check value exist and unequal with null|`required`|  
|in              |check value is in a array      |`in:1,2,3,4,...` these numbers is your array indexes|  
|start with      |check value started by this    |`start_with:{letter}` like this `start_with:a`|  
|persian alpha   |check words are persian alpha  |`persian` |  
|english alpha   |check words are english alpha  |`english`|  
|email           |check email format             |`email`|
|phone           |check phone number             |`phone`|
|boolean         |check value is bool            |`boolean` check is true , false , 0 or 1|
|url             |check value is current url address|`url` check is current target|
|confirm         |check is equal with passed value|`confirm:({your variable})` you can pass variable of component like `confirm:(form_password)`|
