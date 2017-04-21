```
   __                   __                                            
  / /_  ____   ____    / /         ___    _____   _____  ____    _____
 / __/ / __ \ / __ \  / /  ______ / _ \  / ___/  / ___/ / __ \  / ___/
/ /_  / /_/ // /_/ / / /  /_____//  __/ / /     / /    / /_/ / / /    
\__/  \____/ \____/ /_/          \___/ /_/     /_/     \____/ /_/     

```
# Tool Error
Genine Error Thrower, which:
- Throws errors according to policies.
- Logs errors when throwing errors
- Separates Enduser / Debugger error Description

### Error Configuration
__Configuration for single error looks like this:__

```javascript
"header_policy_error": {      							// Error Name        
	"policy": "header_policy",							  // Policy Name
	"log_path":"validator",								    // Plcae to log the Error
	"log_root":"",										        // Root of the Log
	"http_status": 401,									      // http_status if needed
	"code": "0002",										        // Error Code
	"msg": "request header did not contain credential", // Error Message
	"emitter": "request"								      // Source Of Error
}
```

## Issues
Please Refer to [https://code.teambition.com/tools/error/issues](https://code.teambition.com/tools/error/issues)
