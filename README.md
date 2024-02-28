# simplereactdialogcomponent

A React component to render a simple dialog component.

## Usage Examples

To install the component : `npm i simplereactdialogcomponent`

Inside a React component, you can now render any modal :

    <Dialog  isOpen={showDialog}  onClose={()  => {handleCloseDialog(); handleReset();}} content={dialogContent} />

To configure the component, you can create a dialogContent const :

    const dialogContent = {

        title: 'Dialog content',

        buttonText: 'Close',

    };

You can customize the dialog component by adding the prop style to the component :

    <Dialog style={{ backgroundColor: 'lightblue' }} isOpen={isOpen} onClose={handleClose} content={content} />

## Dependencies

No dependency.
