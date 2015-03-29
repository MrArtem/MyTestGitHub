import org.json.simple.JSONAware;
import org.json.simple.JSONObject;

public class InfoMessage implements JSONAware {

	private String nameUser;
	private int id;
	private String text;
	private boolean deleted = false;
	private boolean changed = false;
	
	public InfoMessage() {
		nameUser = "1";
		text = "";
		id = -1;		
	}
	public InfoMessage(String text,String nameUser) {
		this.nameUser = nameUser;
		this.text = text;
		id = -1;		
	}
	public void setID(int id) {
		this.id = id;
	}
	public void setDelete(boolean deleted) {
		this.deleted = deleted;
	}
	public void setChange(boolean changed) {
		this.changed = changed;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getNameUser() {
		return nameUser;
	}
	public int getID() {
		return id;
	}
	public String getText() {
		return text;
	}
	public boolean getDelete() {
		return deleted;
	}
	public boolean getChange() {
		return changed;
	}
	
	public void deleteMessage() {
		if(deleted != true) {
			this.text = "message has deleted.";
			this.setDelete(true);
		}
	}
	
	public static InfoMessage parseInfoMessage(JSONObject obj){
		InfoMessage info = new InfoMessage();
		if((String)obj.get("user") != null) {
		info.nameUser = (String)obj.get("user");
		}
		info.text = (String)obj.get("message");
		info.id = Integer.parseInt(obj.get("id").toString());
		return info;
	}	
	@Override
	public String toJSONString(){
		JSONObject obj = new JSONObject();
		obj.put("user", nameUser);
		obj.put("message", text);
		obj.put("id", id);
		return obj.toString();
	}
	@Override
	public String toString(){
		return nameUser+" : "+text;
	}
	@Override
	public boolean equals(Object obj){
		return (((InfoMessage)obj).getID()==id);
	}
}