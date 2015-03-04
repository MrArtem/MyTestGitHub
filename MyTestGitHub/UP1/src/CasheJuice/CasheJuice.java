package CasheJuice;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;

import Component.Component;
import Juice.Juice;

public class CasheJuice implements Runnable{

	private ArrayList<Juice> al;
	private Comparator<Juice> comp;
	private int count = 0;
	public CasheJuice(ArrayList<Juice> al)
	{
		this.al = al;
	}
	public CasheJuice()
	{
		al = new ArrayList<>(); 
	}
	public void add(Juice j)
	{
		al.add(j);
	}
    public void sort(Comparator<Juice> comp)
    {
    	for(Juice i : this.al)
    	{
    		i.sortComponent();
    	}
    	al.sort(comp);
    }
    public int countWash()
    {
    	int volumn = 0;
    	int k1 = al.size();
    	for(int i = 0;i<k1;i++)
    	{
    		Juice j = al.get(i);
    		if(j.getUsed() == false )
    		{
    			count++;
    			j.setUsed();
    			volumn = j.size();
    			for(int k = 0;k<k1;k++)
    			{
    				Juice j2 = al.get(k);
    				if(volumn < j2.size() || j.equals(j2))
    				{
    					if(j2.getListComponent().containsAll(j.getListComponent()) == true && j2.getUsed() == false)
    					{
    						j = j2;
    						j2.setUsed();
    						volumn = j.size();
    					}
    				}
    			}
    		}
    		
    	}
     	return count;
    }
    public void show()
    {
    	for(Juice i : al)
    	{
    		for(Component j : i.getListComponent())
    		{
    			System.out.print(j.getComponent()+" ");
    		}
    		System.out.println();
    	}
    }
    public void setComparator(Comparator<Juice> comp)
    {
    	this.comp = comp;
    }
	@Override
	public void run() {
		this.sort(comp);
		
	}
    
}
