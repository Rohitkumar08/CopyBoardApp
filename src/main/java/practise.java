import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.DataFlavor;
import java.awt.datatransfer.StringSelection;
import java.awt.datatransfer.Transferable;

public class practise {

	public static void main(String args[]) {
		//copy
		StringSelection data = new StringSelection("this is copied to the clipboard");
		Clipboard cp= Toolkit.getDefaultToolkit().getSystemClipboard();
		cp.setContents(data, data);
		
		//paste
		try {
			Transferable t = cp.getContents(null);
			if(t.isDataFlavorSupported(DataFlavor.stringFlavor))
				System.out.println(t.getTransferData(DataFlavor.stringFlavor));
			
		}
		catch(Exception e){
			System.out.println("");
		}
	}
	
}
