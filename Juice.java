package Juice;

import java.util.ArrayList;
import java.util.StringTokenizer;

import CasheComponent.CasheComponent;
import Component.Component;
import MyComparatorComponent.MyComparatorComponent;

public class Juice {

	private ArrayList<Component> alComponent;
	private String allComponent;
	private boolean used;
	public Juice(ArrayList<Component> alComponents)
	{
		this.alComponent = alComponents;
		 used = false;
	}
	public Juice(String name)
	{
		used = false;
		allComponent = name;
		alComponent = new ArrayList<Component>();
		StringTokenizer st = new StringTokenizer(name);
		CasheComponent cComponent = CasheComponent.getInstance();
		while(st.hasMoreTokens())
		{
			
			String comp = st.nextToken();
			cComponent.addComponent(comp);
			cComponent.addAllComponent(comp);
			alComponent.add(new Component(comp.toLowerCase()));
			
		}
	}
	public Component get(int index)
	{
		return alComponent.get(index);
	}
	public ArrayList<Component> getListComponent()
	{
		return alComponent;
	}
	public int size()
	{
		return alComponent.size();
	}
	public String getAllName()
	{
		return allComponent;
	}
	public void setUsed()
	{
		used = true;
	}
	public boolean getUsed()
	{
		return used;
	}
	public void sortComponent()
	{
		this.alComponent.sort(new MyComparatorComponent());
	}
	@Override
	public boolean equals(Object o)
	{
		int count = 0;
		Juice j = (Juice)o;
		for(Component  c1 : alComponent)
			for(Component c2 : j.alComponent)
			{
				if(c1.equals(c2) == true)
					count++;
			}
		if(count == alComponent.size())
			return true;
		else return false;
	}
	
}
