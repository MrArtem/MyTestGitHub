package Component;

import org.omg.CosNaming.NameComponent;

public class Component {

	private String nameComponent;
	public Component(String nameComponent)
	{
		this.nameComponent = nameComponent;
	}
	public String getComponent()
	{
		return nameComponent;
	}
	public void setComponent(String nameComponent)
	{
	  this.nameComponent = nameComponent;	
	}
	public boolean equals(Object obj)
	{
		Component str = (Component)obj;
		return this.nameComponent.equals(str.nameComponent);	
	}
	@Override
    public int hashCode() {
        return this.nameComponent.hashCode();
    }
}
